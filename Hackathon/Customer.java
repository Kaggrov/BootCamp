import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Date;

import static java.lang.Long.parseLong;

public class Customer {

    Number customerId;
    String firstName;
    String lastName;
    String address;
    String city;
    Long phoneNumber;

    Date joiningDate;

    static int customerCount = 100;

    public Customer() {
    }

    public Customer(Number customerId, String firstName, String lastName, String address, String city, Long phoneNumber, Date joiningDate) {
        this.customerId = customerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.phoneNumber = phoneNumber;
        this.joiningDate = joiningDate;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "customerId=" + customerId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", address='" + address + '\'' +
                ", city='" + city + '\'' +
                ", phoneNumber=" + phoneNumber +
                ", joiningDate=" + joiningDate +
                '}';
    }


    static  public Customer generateCustomer(String customerDetails) throws ParseException {
        String[] res = customerDetails.split("[,]", 0);
        Customer customer = new Customer();
        customer.setCustomerId(++customerCount);
        customer.setFirstName(res[0]);
        customer.setLastName(res[1]);
        customer.setAddress(res[2]);
        customer.setCity(res[3]);
        customer.setPhoneNumber(parseLong(res[4]));

        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date parsedDate = sdf.parse(res[5]);
        customer.setJoiningDate(parsedDate);

        return customer;
    }
    public Number getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Number customerId) {
        this.customerId = customerId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Long getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(Long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Date getJoiningDate() {
        return joiningDate;
    }

    public void setJoiningDate(Date joiningDate) {
        this.joiningDate = joiningDate;
    }


}
