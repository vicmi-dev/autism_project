import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CuentoPage } from './cuento.page';

describe('CuentoPage', () => {
  let component: CuentoPage;
  let fixture: ComponentFixture<CuentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CuentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
