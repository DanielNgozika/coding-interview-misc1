declare class RingBuffer<T> {
    constructor(capacity: number);
    push(value: T): void;
    peek(): T | undefined;
    pop(): T | undefined;
}
