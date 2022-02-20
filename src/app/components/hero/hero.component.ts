import { Component, OnInit } from '@angular/core';
import { ConfirmBoxEvokeService, ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  isConnected :any;
  constructor(private confirmBoxEvokeService: ConfirmBoxEvokeService,
    private toastEvokeService: ToastEvokeService) { }

  ngOnInit(): void {
     this.isConnected = 'login';
  }
  switchForms(){
    this.toastEvokeService.success('I am title!', 'I am a message!').subscribe();
  }
}
