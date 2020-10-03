class Unit {
    constructor(type, health, maxHealth, maxDistance) {
        this.type = type;
        this.health = health;
        this.maxHealth = maxHealth;
        this.maxDistance = maxDistance;
    }

    isReadyToMove(distance) {
        return distance <= this.maxDistance;
    }

    isReadyToFight() {
        return this.health >= this.maxHealth / 2;
    }

    restore() {
        return this.health = this.health < this.maxHealth;
    }

    clone() {
        return new Unit(this.type, this.health, this.maxHealth, this.maxDistance);
    }
}

class Army {
    constructor(defaultUnits) {
        this.units = [];
        if (defaultUnits) this.combineUnits(defaultUnits);
    }

    isReadyToMove(distance) {
        return this.units.every(unit => unit.isReadyToMove(distance));
    }

    isReadyToFight() {
        return this.units.every(unit => unit.isReadyToFight());
    }

    restore() {
        for (const unit of this.units) unit.restore();
    }

    getReadyToMoveUnits(distance) {
        return this.units.filter(unit => unit.isReadyToMove(distance));
    }

    combineUnits(newUnits) {
        return this.units = this.units.concat(newUnits);
    }

    cloneUnit(n) {
        const unit = this.units[n - 1];
        return unit !== undefined ? unit.clone() : undefined;
    }
}
