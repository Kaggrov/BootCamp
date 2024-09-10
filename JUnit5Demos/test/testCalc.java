import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class testCalc {

    @Test
    void testAddMethod() {
        Calculator c  = new Calculator();
        assertEquals(5, c.add(2,3), "Passed");;
    }
}
