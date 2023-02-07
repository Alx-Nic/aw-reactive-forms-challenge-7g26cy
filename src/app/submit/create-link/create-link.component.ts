import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Link } from '../../types';
import { LinkRepoService } from '../../link-repo.service';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'hn-create-link',
  templateUrl: './create-link.component.html',
  styleUrls: ['./create-link.component.css'],
})
export class CreateLinkComponent implements OnInit {
  public myForm = new FormGroup({});

  constructor(
    private formBuider: FormBuilder,
    private linkRepo: LinkRepoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.myForm = this.formBuider.group({
      description: ['', [Validators.required, Validators.minLength(4)]],
      url: ['', [Validators.pattern('https?://[w./]+'), Validators.required]],
    });
  }

  get description() {
    return this.myForm.get('description');
  }

  createLink(form: NgForm) {
    // if (form.valid) {
    //   this.linkRepo
    //     .addLink(form.value)
    //     .subscribe(() => this.router.navigate(['/']));
    // }
  }
}
