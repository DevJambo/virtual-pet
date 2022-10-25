const Pet = require('./src/pet');

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
      pet.growUp();
      pet.walk();
  
      expect(pet.fitness).toEqual(8);
    });
    it('increases fitness by 4, maximum fitness is 10', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      pet.growUp();
      pet.walk();
      pet.walk();
  
      expect(pet.fitness).toEqual(10);
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
  });