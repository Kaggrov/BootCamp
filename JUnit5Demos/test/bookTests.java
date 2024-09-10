import Aug10.com.India.gov.BookException;
import Aug10.com.India.gov.Model.Book;
import Aug10.com.India.gov.service.BookService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

public class bookTests {

    private BookService bookService;

    @BeforeEach
    void setUp() {
        bookService = new BookService();
    }

    @AfterEach
    void tearDown() {
        bookService = null;
    }

    @Test
    void testIfProvidedEmptyListGetAllBooks() {
        List<Book> bl = new ArrayList<>();

        assertEquals(bl,bookService.getAllBooks(),"Empty Test Case Passed");
    }

    @Test
     void testIfProvidedDataThenCorrectResultGetAllBooks(){

        Book b1 = new Book(101,"Cpp","goodPublishing");
        Book b2 = new Book(102,"Java with me","BestPublishing");
        Book b3 = new Book(103,"CP with Cpp","Wiley");

        List<Book> bl = new ArrayList<>();
        bl.add(b1);
        bl.add(b2);
        bl.add(b3);

        bookService.addBooks(b1);
        bookService.addBooks(b2);
        bookService.addBooks(b3);

        assertEquals(bl,bookService.getAllBooks(),"All Books passed");

    }

    @Test
    void testIfCorrectIdGivenGetBook() {

        Book b1 = new Book(101,"Cpp","goodPublishing");
        Book b2 = new Book(102,"Java with me","BestPublishing");
        Book b3 = new Book(103,"CP with Cpp","Wiley");

        bookService.addBooks(b1);
        bookService.addBooks(b2);
        bookService.addBooks(b3);

        assertEquals("Java with me",bookService.getBookByBookId(102),"Passed");

    }

    @ParameterizedTest
    @ValueSource(ints = {101, 102, 103})
    void testMultipleCorrectIdBooks(int id) {

        Book b1 = new Book(101,"Cpp","goodPublishing");
        Book b2 = new Book(102,"Java with me","BestPublishing");
        Book b3 = new Book(103,"CP with Cpp","Wiley");

        bookService.addBooks(b1);
        bookService.addBooks(b2);
        bookService.addBooks(b3);

        assertNotNull(bookService.getBookByBookId(id),"Passed");

    }


    @Test
    void testIfIncorrectIdGivenGetBook() {

        Book b1 = new Book(101,"Cpp","goodPublishing");
        Book b2 = new Book(102,"Java with me","BestPublishing");
        Book b3 = new Book(103,"CP with Cpp","Wiley");

        bookService.addBooks(b1);
        bookService.addBooks(b2);
        bookService.addBooks(b3);

        assertEquals("No Book with this Id",bookService.getBookByBookId(1000),"Passed");

    }

    @Test
    void testIfCorrectPublisherNameGiven() {

        Book b1 = new Book(101,"Cpp","goodPublishing");
        Book b2 = new Book(102,"Java with me","BestPublishing");
        Book b3 = new Book(103,"CP with Cpp","Wiley");

        bookService.addBooks(b1);
        bookService.addBooks(b2);
        bookService.addBooks(b3);

        List<String>al = new ArrayList<>();
        al.add("CP with Cpp");

        assertEquals(al,bookService.getBookByPublisherName("Wiley"),"Passed");

    }
    @Test
    void testIfIncorrectPublisherNameGiven() {

        Book b1 = new Book(101,"Cpp","goodPublishing");
        Book b2 = new Book(102,"Java with me","BestPublishing");
        Book b3 = new Book(103,"CP with Cpp","Wiley");

        bookService.addBooks(b1);
        bookService.addBooks(b2);
        bookService.addBooks(b3);

        assertNull(bookService.getBookByPublisherName("No Publisher Name"),"Passed");

    }

    @Test
    void testIfBookAvailableIfTitleGiven() throws BookException {
        Book b1 = new Book(101,"Cpp","goodPublishing");
        Book b2 = new Book(102,"Java with me","BestPublishing");
        Book b3 = new Book(103,"CP with Cpp","Wiley");

        bookService.addBooks(b1);
        bookService.addBooks(b2);
        bookService.addBooks(b3);

        assertEquals(b3,bookService.getBookByTitle("CP with Cpp"),"Passed");
        assertThrows(BookException.class,()->bookService.getBookByTitle("Champak"));

    }
}
