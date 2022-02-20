import { Component, OnInit } from '@angular/core';
import { ConfirmBoxEvokeService, ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';

@Component({
  selector: 'app-test-only',
  templateUrl: './test-only.component.html',
  styleUrls: ['./test-only.component.css']
})
export class TestOnlyComponent implements OnInit {

  constructor(private confirmBoxEvokeService: ConfirmBoxEvokeService,
    private toastEvokeService: ToastEvokeService) { }

  ngOnInit(): void {
  }
  testToast(){
    // alert('hello')
    //this.confirmBoxEvokeService.success('I am title!', 'I am a message!', 'Okay').subscribe();
    this.toastEvokeService.success('I am title!', 'I am a message!').subscribe();
    return true;
  }
}
