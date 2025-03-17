import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CampaignService } from '../../core/api/campaign/campaign.service';
import { Router } from '@angular/router';
import { CampaignCreateComponent } from "../campaign-create/campaign-create.component";
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Campaign } from '../../core/api/campaign/campaign.model';

@Component({
  selector: 'app-campaign-update',
  imports: [ReactiveFormsModule, CampaignCreateComponent, MatDialogModule],
  templateUrl: './campaign-update.component.html',
  styleUrl: './campaign-update.component.scss'
})
export class CampaignUpdateComponent {
  isEditMode = true;

  public campaign = inject<Campaign>(MAT_DIALOG_DATA);
  private readonly dialog = inject(MatDialog);

  constructor() {
  }
  closeDialog() {
    this.dialog.closeAll();
  }
}
