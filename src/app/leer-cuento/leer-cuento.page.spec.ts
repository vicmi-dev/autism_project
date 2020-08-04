import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeerCuentoPage } from './leer-cuento.page';

describe('LeerCuentoPage', () => {
  let component: LeerCuentoPage;
  let fixture: ComponentFixture<LeerCuentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerCuentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeerCuentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
