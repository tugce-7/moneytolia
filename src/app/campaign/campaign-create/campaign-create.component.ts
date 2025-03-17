import { Component, Input, input, InputSignal, OnInit, output, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CampaignService } from '../../core/api/campaign/campaign.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Campaign } from '../../core/api/campaign/campaign.model';

@Component({
  selector: 'app-campaign-create',
  imports: [ReactiveFormsModule],
  templateUrl: './campaign-create.component.html',
  styleUrl: './campaign-create.component.scss'
})
export class CampaignCreateComponent implements OnInit {
  campaignForm: FormGroup;

  isEditMode = input<boolean>(false);
  campaign = input<Campaign>();

  onUpdatedCampaign = output<boolean>();

  constructor(private fb: FormBuilder, private campaignService: CampaignService, private router: Router) {
    this.campaignForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      id: [null],
    });

  }

  ngOnInit(): void {

    if (this.isEditMode()) {

      this.campaignForm.patchValue({
        title: this.campaign()?.title,
        description: this.campaign()?.description,
        id: this.campaign()?.id,
        // score: this.campaign()?.score,
        // campaignDate: moment(this.campaign()?.campaignDate),
      });
    }
  }

  onSubmit() {
    if (this.campaignForm.valid) {

      if (this.isEditMode()) {
        this.campaignService.updateCampaign(this.campaignForm.value);
        this.onUpdatedCampaign.emit(true);
        return;
      }

      const { title, description } = this.campaignForm.value;
      this.campaignService.addCampaign(title, description);

      Swal.fire({
        icon: 'success',
        text: 'Kampanya başarılı bir şekilde eklendi!',
        timer: 2000,
        showConfirmButton: false,
      });

      this.router.navigate(['/campaigns']);
    }
  }
}
