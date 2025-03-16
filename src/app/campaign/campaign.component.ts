import { Component, inject } from '@angular/core';
import { CampaignService } from '../core/api/campaign/campaign.service';
import { Campaign } from '../core/api/campaign/campaign.model';

@Component({
  selector: 'app-campaign',
  imports: [],
  templateUrl: './campaign.component.html',
  styleUrl: './campaign.component.scss'
})
export class CampaignComponent {
  private readonly campaignService = inject(CampaignService);
  campaigns = this.campaignService.getCampaigns();

  constructor() {
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
}
