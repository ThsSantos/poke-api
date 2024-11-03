import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomPokePage } from './random-poke.page';

describe('RandomPokePage', () => {
  let component: RandomPokePage;
  let fixture: ComponentFixture<RandomPokePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RandomPokePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
