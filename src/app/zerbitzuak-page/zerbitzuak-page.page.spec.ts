import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZerbitzuakPagePage } from './zerbitzuak-page.page';

describe('ZerbitzuakPagePage', () => {
  let component: ZerbitzuakPagePage;
  let fixture: ComponentFixture<ZerbitzuakPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ZerbitzuakPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
