// test.js - Simple math test
function add(a, b) {
  return a + b;
}

console.log("Running automated unit test...");

// Test Case 1: 5 + 5 should equal 10
if (add(5, 5) === 10) {
  console.log("✅ Test Passed: 5 + 5 = 10");
  process.exit(0); // Exit code 0 means SUCCESS
} else {
  console.error("❌ Test Failed: math calculation error!");
  process.exit(1); // Exit code 1 means FAILURE
}