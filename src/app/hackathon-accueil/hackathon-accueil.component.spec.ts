import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonAccueilComponent } from './hackathon-accueil.component';

describe('HackathonAccueilComponent', () => {
  let component: HackathonAccueilComponent;
  let fixture: ComponentFixture<HackathonAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HackathonAccueilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HackathonAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
