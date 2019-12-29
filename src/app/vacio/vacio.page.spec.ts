import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VacioPage } from './vacio.page';

describe('VacioPage', () => {
  let component: VacioPage;
  let fixture: ComponentFixture<VacioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VacioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
