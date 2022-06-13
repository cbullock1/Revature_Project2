import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemDisplayComponent } from './menu-item-display.component';

describe('MenuItemDisplayComponent', () => {
  let component: MenuItemDisplayComponent;
  let fixture: ComponentFixture<MenuItemDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuItemDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
