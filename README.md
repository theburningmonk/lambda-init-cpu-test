# lambda-init-cpu-test

Demo to compare how much CPU power a function has during init vs. in the handler.

Methodology: do the same CPU work (calculating primes, which has minimal memory overhead) outside & inside the handler and compare performance.

Finding: During init, the function has the equivalent CPU power of a 256MB function, regardless memory setting.