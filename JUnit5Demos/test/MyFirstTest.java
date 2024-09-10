import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertNotNull;

public class MyFirstTest {
    @Test
    public void firstTest() {
        assertNotNull("Hello", "Test case passed");
    }
}