import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

public class handlebank {

    public static Map<Customer, ArrayList<Account>> mp;
    public static ArrayList<Account>openedAccounts;
    public static void main(String[] args) throws ParseException {
        System.out.println("Welcome to Natwest Banking");
        mp = new HashMap<>();
        openedAccounts = new ArrayList<>();

        Scanner sc = new Scanner(System.in);
        System.out.println("Do you want to banking with us! Yes/No");
        String choice = sc.next();

        if(Objects.equals(choice, "Yes")){

            System.out.println("Enter Ur account Details in, Separator as follows");
            System.out.println("First Name,LastName,Address,City,Phone Number,Joining Date(yyyy-MM-dd)");
            String details = sc.next();
            Customer newCustomer  = Customer.generateCustomer(details);
            System.out.println("Your customer details are");
            System.out.println(newCustomer);

            String accountOpenStatus;
            Account newAccount = null;
            do{
                System.out.println("Do you want to create Account ? Yes/No/Exit");
                accountOpenStatus = sc.next();
                System.out.println(accountOpenStatus);

                if(Objects.equals(accountOpenStatus, "Yes")){
                    System.out.println("Select Account type from the following ");
                    System.out.println("1. Savings Account");
                    System.out.println("2. Current Account");
                    System.out.println("3. Salary Account");

                    int type= sc.nextInt();

                    System.out.println("Enter initial balance");
                    String deposit = sc.next();

                    String accountDetails = type+","+deposit+","+newCustomer.getCustomerId()+","+"2023-08-22";
                     newAccount = Account.generateAccount(accountDetails);

                    System.out.println("Your account details are :-");
                    System.out.println(newAccount);
                    openedAccounts.add(newAccount);

                    if(mp.get(newCustomer)!=null){
                        ArrayList<Account> accountArrayList = mp.get(newCustomer);
                        accountArrayList.add(newAccount);
                        mp.put(newCustomer,accountArrayList);
                    }
                    else{
                        ArrayList<Account> accounts = new ArrayList<>();
                        accounts.add(newAccount);
                        mp.put(newCustomer,accounts);
                    }



                }else if(Objects.equals(accountOpenStatus, "No")){
                    String transactionChoice;
                    do{
                        System.out.println("Do you want to perform Transaction Yes/No");
                        transactionChoice= sc.next();
                        System.out.println(transactionChoice);
                        if(Objects.equals(transactionChoice, "Yes")){
                            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                            Date parsedDate = sdf.parse("2023-08-22");
                            try{
                                if(newAccount ==null){
                                    throw new NoAccountException("Create a account first");
                                }
                            }catch(NoAccountException noAccountException){
                                System.out.println("You need to create a account to have transaction");
                            }
                            assert newAccount != null;
                            Transaction transaction = new Transaction(0L, newAccount.getAccountNo(),parsedDate);
                            System.out.println("Select the following option");
                            System.out.println("1. Deposit");
                            System.out.println("2. WithDraw");
                            System.out.println("3. Transfer");

                            int option = sc.nextInt();

                            switch (option){
                                case 1:
                                    System.out.println("Enter deposit amount");
                                    long depositAmount = sc.nextLong();
                                    String successDeposit  = transaction.deposit(depositAmount,newCustomer);
                                    System.out.println(successDeposit);
                                    break;

                                case 2:
                                    System.out.println("Enter withdraw amount");
                                    long withDrawAmount = sc.nextLong();
                                    String withDrawSuccess = transaction.withDraw(withDrawAmount,newCustomer);
                                    System.out.println(withDrawSuccess);
                                    break;

                                case 3:
                                    System.out.println("Enter Transfer amount");
                                    long transferAmount = sc.nextLong();
                                    System.out.println("Enter Account Number");
                                    long accountNumber = sc.nextLong();
                                    String transferSuccess = transaction.amountTransfer(transferAmount,accountNumber,newCustomer);
                                    System.out.println(transferSuccess);
                                    break;

                            }
                        }

                    }while(!Objects.equals(transactionChoice, "No"));
                }

            }while(!Objects.equals(accountOpenStatus, "Exit"));



        }
        else{
            System.out.println("Thanks and come again ");
        }

    }
}
