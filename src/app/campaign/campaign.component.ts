import { Component, inject } from '@angular/core';
import { CampaignService } from '../core/api/campaign/campaign.service';
import Swal from 'sweetalert2';
import { initFlowbite } from 'flowbite';
import { MatDialog } from '@angular/material/dialog';
import { CampaignUpdateComponent } from './campaign-update/campaign-update.component';
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

  private readonly dialog = inject(MatDialog);

  constructor() { }

  ngAfterViewInit() {
    initFlowbite();
  }

  trackById(index: number, item: any): number {
    return item.id;
  }

  deleteCampaign(id: number) {
    Swal.fire({
      title: 'Emin misiniz?',
      text: 'Bu kampanya silinecektir!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Evet, sil!',
      cancelButtonText: 'İptal'
    }).then((result) => {
      if (result.isConfirmed) {
        this.campaignService.deleteCampaign(id);
      }
    });
  }

  updateCampaign(campaign: Campaign) {
    console.log(this.campaigns())
    this.dialog.open(CampaignUpdateComponent, {
      data: campaign
    });
  }

  increasePoints(id: number) {
    this.campaignService.updatePoints(id, 1);
  }

  decreasePoints(id: number) {
    this.campaignService.updatePoints(id, -1);
  }

}
