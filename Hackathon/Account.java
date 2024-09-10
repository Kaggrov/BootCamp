import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import static java.lang.Double.parseDouble;
import static java.lang.Integer.parseInt;

public class Account {

    double accountNo;
    double accountBalance;
    Category accountType;

    Number customerId;

    Date dateOpened;

    static long accountCounter = 100000;

    public Account() {
    }

    public Account(double accountNo, double accountBalance, Category accountType, Number customerId, Date dateOpened) {
        this.accountNo = accountNo;
        this.accountBalance = accountBalance;
        this.accountType = accountType;
        this.customerId = customerId;
        this.dateOpened = dateOpened;
    }

    @Override
    public String toString() {
        return "Account{" +
                "accountNo=" + accountNo +
                ", accountBalance=" + accountBalance +
                ", accountType=" + accountType +
                ", customerId=" + customerId +
                ", dateOpened=" + dateOpened +
                '}';
    }

    public static Account generateAccount(String accountDetails) throws ParseException {
        String[] res = accountDetails.split("[,]", 0);
        Account account = new Account();
        account.setAccountNo(++accountCounter);
        Category currentType = Category.accountCategories().get(parseInt(res[0])-1);
        account.setAccountType(currentType);
        account.setAccountBalance(parseDouble(res[1]));
        account.setCustomerId(parseInt(res[2]));

        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date parsedDate = sdf.parse(res[3]);

        account.setDateOpened(parsedDate);

        return account;

    }

    public double getAccountNo() {
        return accountNo;
    }

    public void setAccountNo(double accountNo) {
        this.accountNo = accountNo;
    }

    public double getAccountBalance() {
        return accountBalance;
    }

    public void setAccountBalance(double accountBalance) {
        this.accountBalance = accountBalance;
    }

    public Category getAccountType() {
        return accountType;
    }

    public void setAccountType(Category accountType) {
        this.accountType = accountType;
    }

    public Number getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Number customerId) {
        this.customerId = customerId;
    }

    public Date getDateOpened() {
        return dateOpened;
    }

    public void setDateOpened(Date dateOpened) {
        this.dateOpened = dateOpened;
    }
}
