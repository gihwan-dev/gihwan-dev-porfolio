mod utils;

use wasm_bindgen::prelude::*;
use pulldown_cmark::*;

#[wasm_bindgen]
pub fn markdown_to_html(source: &str) -> String {
    let parser = Parser::new(source);
    let mut html_output = String::new();
    html::push_html(&mut html_output, parser);
    html_output
}