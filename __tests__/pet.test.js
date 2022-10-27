const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
      const pet = new Pet('Fido');
  
      expect(pet.name).toEqual('Fido');
    });
    it('has a initial age of 0', () => {
      const pet = new Pet('Fido');
  
      expect(pet.age).toEqual(0);
    });
    it('has a initial hunger of 0', () => {
      const pet = new Pet('Fido');
  
      expect(pet.hunger).toEqual(0);
    });
    it('has a initial fitness of 10', () => {
      const pet = new Pet('Fido');
  
      expect(pet.fitness).toEqual(10);
    });
  });


  describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.age).toEqual(1);
    });
    it('increments the hunger by 5', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.hunger).toEqual(5);
    });
    it('decreases the fitness by 3', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.fitness).toEqual(7);
    });
    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');

      pet.age = 30;

      expect(() => pet.growUp()).toThrow('Your pet is no longer alive :o');
    });
  });


  describe('walk', () => {
    it('increases fitness by 4, maximum fitness is 10', () => {
      const pet = new Pet('Fido');
  
      pet.walk();
  
      expect(pet.fitness).toEqual(10);
    });
    it('increases fitness by 4, maximum fitness is 10', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      pet.feed();
      pet.growUp();
      pet.walk();
  
      expect(pet.fitness).toEqual(8);
    });
    it('increases fitness by 4, maximum fitness is 10', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      pet.feed();
      pet.growUp();
      pet.walk();
      pet.walk();
  
      expect(pet.fitness).toEqual(10);
    });
    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');

      pet.age = 30;

      expect(() => pet.walk()).toThrow('Your pet is no longer alive :o');
    });
  });


  describe('feed', () => {
    it('decreases hunger by 3, minimum is 0', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      pet.feed();
  
      expect(pet.hunger).toEqual(2);
    });
    it('decreases hunger by 3, minimum is 0', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      pet.feed();
      pet.growUp();
  
      expect(pet.hunger).toEqual(7);
    });
    it('decreases hunger by 3, minimum is 0', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      pet.feed();
      pet.feed();
  
      expect(pet.hunger).toEqual(0);
    });
    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');

      pet.age = 30;

      expect(() => pet.feed()).toThrow('Your pet is no longer alive :o');
    });
  });


  describe('checkUp', () => {
    it('if pet fitness is 3 or less and pet hunger is 5 or more returns "I am hungry AND I need a walk"', () => {
      const pet = new Pet('Fido');
      pet.fitness = 3;
      pet.hunger = 5;
      pet.checkUp();
      expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");
    });
    it('if pet hunger is 5 or more returns "I am hungry"', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      pet.checkUp();
  
      expect(pet.checkUp()).toEqual("I am hungry");
    });
    it('if pet fitness is 3 or less returns "I need a walk"', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      pet.feed();
      pet.growUp();
      pet.feed();
      pet.growUp();
      pet.feed();
      pet.feed();
      pet.checkUp()
  
      expect(pet.checkUp()).toEqual("I need a walk");
    });
    it('if pet fitness is above 3 and pet hunger is below 5 return "I feel great!"', () => {
      const pet = new Pet('Fido');

      pet.checkUp()
  
      expect(pet.checkUp()).toEqual("I feel great!");
    });
  });


  describe('isAlive', () => {
    it('if pet age less than 30, hunger less than 10 and fitness above 0 return "true"', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      pet.isAlive;
      
      expect(pet.isAlive).toEqual(true);
    });
    it('if pet age is 30 or more return "false"', () => {
      const pet = new Pet('Fido');

      pet.age = 31
      pet.isAlive;

      expect(pet.isAlive).toEqual(false);
    });
    it('if pet hunger is 10 or more return "false"', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      pet.growUp();
      pet.isAlive;
  
      expect(pet.isAlive).toEqual(false);
    });
    it('if pet fitness is 0 or less return "false"', () => {
      const pet = new Pet('Fido');

      pet.fitness = 0
      pet.isAlive;
  
      expect(pet.isAlive).toEqual(false);
    });
    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');

      pet.age = 30;

      expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :o');
    });
  });