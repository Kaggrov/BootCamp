package Aug10.com.India.gov.service;

import Aug10.com.India.gov.BookException;
import Aug10.com.India.gov.Model.Book;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class BookService {

    List<Book> bl = new ArrayList<>();

    public void addBooks(Book book){
        bl.add(book);
    }

    public List<Book> getAllBooks(){
        return bl;
    }

    public String getBookByBookId(int Id){

        for(Book temp:bl){
            if(temp.getBookId() == Id){
                return temp.getBookName();
            }
        }

        return "No Book with this Id";

    }

    public List<String> getBookByPublisherName(String publisher){

        List<String> sl =  new ArrayList<>();

        for(Book temp:bl){
            if(Objects.equals(temp.getPublisherName(), publisher)){
               sl.add(temp.getBookName());
            }
        }

        return !sl.isEmpty() ? sl : null;

    }

    public Book getBookByTitle(String title) throws BookException {
        Book ans = null;
        for(Book temp:bl){
            if(Objects.equals(temp.getBookName(), title)){
               ans =  temp;
            }
        }

        if(ans!=null){
            return ans;
        }
        else{
            throw new BookException("No Book Available");
        }
    }


}
