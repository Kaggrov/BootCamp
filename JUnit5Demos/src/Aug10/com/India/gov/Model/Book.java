package Aug10.com.India.gov.Model;

public class Book {

    int bookId;
    String bookName,publisherName;

    public Book(int bookId, String bookName, String publisherName) {
        this.bookId = bookId;
        this.bookName = bookName;
        this.publisherName = publisherName;
    }

    public Book() {
    }

    public int getBookId() {
        return bookId;
    }

    public void setBookId(int bookId) {
        this.bookId = bookId;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getPublisherName() {
        return publisherName;
    }

    public void setPublisherName(String publisherName) {
        this.publisherName = publisherName;
    }
}
