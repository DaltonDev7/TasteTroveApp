import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectFriendComponent } from './connect-friend.component';

describe('ConnectFriendComponent', () => {
  let component: ConnectFriendComponent;
  let fixture: ComponentFixture<ConnectFriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectFriendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConnectFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
