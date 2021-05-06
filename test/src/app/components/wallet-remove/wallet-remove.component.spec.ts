import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletRemoveComponent } from './wallet-remove.component';

describe('WalletRemoveComponent', () => {
  let component: WalletRemoveComponent;
  let fixture: ComponentFixture<WalletRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
