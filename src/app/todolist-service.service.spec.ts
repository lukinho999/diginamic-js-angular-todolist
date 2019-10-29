import { TestBed } from '@angular/core/testing';

import { TodolistServiceService } from './todolist-service.service';

describe('TodolistServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodolistServiceService = TestBed.get(TodolistServiceService);
    expect(service).toBeTruthy();
  });
});
