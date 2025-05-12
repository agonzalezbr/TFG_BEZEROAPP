import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZerbitzuakInfoPage } from './zerbitzuak-info.page';

describe('ZerbitzuakInfoPage', () => {
  let component: ZerbitzuakInfoPage;
  let fixture: ComponentFixture<ZerbitzuakInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ZerbitzuakInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
