import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [provideHttpClient()],
    }).compileComponents();
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());

  it('should default topic to Internship', () => {
    expect(component.topic()).toBe('Internship');
  });

  it('should change topic when pickTopic is called', () => {
    component.pickTopic('Collab');
    expect(component.topic()).toBe('Collab');
  });

  it('should set status error when send called with empty fields', () => {
    component.send();
    expect(component.status()).toBe('Add your name, a valid email and a message.');
  });
});
