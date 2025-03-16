import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CampaignService } from '../../core/api/campaign/campaign.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-campaign-create',
  imports: [ReactiveFormsModule],
  templateUrl: './campaign-create.component.html',
  styleUrl: './campaign-create.component.scss'
})
export class CampaignCreateComponent {
  campaignForm: FormGroup;

  constructor(private fb: FormBuilder, private campaignService: CampaignService, private router: Router) {
    this.campaignForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.campaignForm.valid) {
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
