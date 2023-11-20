use wasm_bindgen::prelude::*;
use std::sync::atomic::{AtomicUsize, Ordering};

static CALL_COUNT: AtomicUsize = AtomicUsize::new(0);

#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}

#[wasm_bindgen]
pub fn count(i: usize) -> usize {
    return CALL_COUNT.fetch_add(i, Ordering::SeqCst) + i;
}

#[test]
fn t_greet() {
    assert_eq!("Hello, world!", greet("world"));
    assert_eq!("Hello, &!*)%/\\!", greet("&!*)%/\\"));
}

#[test]
fn t_fibonacci() {
    assert_eq!(1, fibonacci(2));
    assert_eq!(2, fibonacci(3));
    assert_eq!(3, fibonacci(4));
    assert_eq!(8, fibonacci(6));
}

#[test]
fn t_count() {
    assert_eq!(1, count(1));
    assert_eq!(2, count(1));
    assert_eq!(4, count(2));
    assert_eq!(7, count(3));
}