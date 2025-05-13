class Member {
    constructor(fullname, subscription) {
        this.fullname = fullname;
        this.subscription = subscription;
    }

    // getters are return type
    getFullname() {
        return this.fullname;
    }

    getSubscription(active) {
        if(!active) throw new Error(`You're not autheticated!`);
        return this.subscription;
    }

    // setters are void type - takes arguments
    setSubscription(newValue, active, security) {
        if(!active) throw new Error(`You're not autheticated!`);
        else if (security !== 'Tesla') throw new Error('Wrong answer!!! Please call us!');
        this.subscription = newValue;
    }
}

const member1 = new Member('John Doe', 'Gold');
const member2 = new Member('Alex Smith', 'Premium');


// Instead of direct access we prefer getters or setters
console.log(member1.getSubscription(true));

member1.setSubscription('Premium', true, 'Tesla');

console.log(member1.getSubscription(true));