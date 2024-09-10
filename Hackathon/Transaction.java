import java.util.ArrayList;
import java.util.Date;

public class Transaction {

    private long amount;
    private double accountNumber;
    private Date date;

    public Transaction() {
    }

    public Transaction(long amount, double accountNumber, Date date) {
        this.amount = amount;
        this.accountNumber = accountNumber;
        this.date = date;
    }

    @Override
    public String toString() {
        return "Transaction{" +
                "amount=" + amount +
                ", accountNumber=" + accountNumber +
                ", date=" + date +
                '}';
    }


    public String withDraw(long amount,Customer customer){
        try{
            if(amount<0) throw new AmountException("Negative value");
            else{
                ArrayList<Account>accounts = handlebank.mp.get(customer);

                for(Account ac : accounts){
                    if(ac.getAccountNo() == this.accountNumber){
                        if(ac.getAccountBalance() < amount){
                            throw new AmountException("Less than current balance");
                        }
                        else{
                            ac.setAccountBalance(ac.getAccountBalance()-amount);

                            System.out.println("New Account Balance "+ac.getAccountBalance());
                        }

                    }
                }
            }
        }catch(AmountException amountException){
            System.out.println("Negative Values");
            return "Failure";
        }

        return "Success";
    }

    public String deposit(long amount,Customer customer){
        try{
            if(amount<0) throw new AmountException("Negative value");
            else{
                ArrayList<Account>accounts = handlebank.mp.get(customer);

                for(Account ac : accounts){
                    if(ac.getAccountNo() == this.accountNumber){
                        ac.setAccountBalance(ac.getAccountBalance()+amount);

                        System.out.println("New Account Balance "+ac.getAccountBalance());
                    }
                }
            }
        }catch(AmountException amountException){
            System.out.println("Negative Values");
            return "Failure";
        }

        return "Success";
    }

    public String amountTransfer(long amount,double accountNo,Customer customer){
        try{
            if(amount<0) throw new AmountException("Negative value");
            else{
                ArrayList<Account>accounts = handlebank.mp.get(customer);

                for(Account ac : accounts){
                    if(ac.getAccountNo() == this.accountNumber){
                        if(ac.getAccountBalance() < amount){
                            throw new AmountException("Less than current balance");
                        }
                        else{
                            ac.setAccountBalance(ac.getAccountBalance()-amount);
                            System.out.println("Amount Debited "+amount);
                        }


                    }
                }
                for(Account account: handlebank.openedAccounts){
                    if(account.getAccountNo() == accountNo){
                        account.setAccountBalance(account.getAccountBalance()+amount);
                    }
                }
            }
        }catch(AmountException amountException){
            System.out.println("Negative Values");
            return "Failure";
        }

        return "Success";
    }

    public long getAmount() {
        return amount;
    }

    public void setAmount(long amount) {
        this.amount = amount;
    }

    public double getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(double accountNumber) {
        this.accountNumber = accountNumber;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
