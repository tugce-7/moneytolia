import { Injectable, signal } from '@angular/core';
import { Campaign } from './campaign.model';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private campaigns = signal<Campaign[]>(this.loadFromLocalStorage());

  constructor() {
    this.initSampleData();
  }

  private loadFromLocalStorage(): Campaign[] {
    return JSON.parse(localStorage.getItem('campaigns') || '[]');
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('campaigns', JSON.stringify(this.campaigns()));
  }

  private initSampleData(): void {
    if (this.campaigns().length === 0) {
      const sampleCampaign: Campaign = {
        id: 1,
        title: 'Örnek Kampanya',
        description: 'Bu bir örnek kampanya açıklamasıdır.',
        points: 10,
        date: new Date().toLocaleDateString(),
      };
      this.campaigns.set([...this.campaigns(), sampleCampaign]);
      this.saveToLocalStorage();
    }
  }
  getCampaigns() {
    return this.campaigns;
  }

  addCampaign(title: string, description: string) {
    const newCampaign: Campaign = {
      id: Date.now(),
      title,
      description,
      points: 0,
      date: new Date().toLocaleDateString(),
    };
    this.campaigns.set([...this.campaigns(), newCampaign]);
    this.saveToLocalStorage();
  }

  deleteCampaign(id: number) {
    const filteredCampaigns = this.campaigns().filter(campaign => campaign.id !== id);
    this.campaigns.set(filteredCampaigns);
    this.saveToLocalStorage();
  }
}
