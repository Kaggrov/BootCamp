import java.util.ArrayList;
import java.util.List;

public class Category {
    Number typeId;
    String typeName;
    Number interest;

    public Category() {
    }

    public Category(Number typeId, String typeName, Number interest) {
        this.typeId = typeId;
        this.typeName = typeName;
        this.interest = interest;
    }

    @Override
    public String toString() {
        return "Category{" +
                "typeId=" + typeId +
                ", typeName='" + typeName + '\'' +
                ", interest=" + interest +
                '}';
    }

    static public ArrayList<Category> accountCategories(){
        Category category1 = new Category(1001,"Savings",8);
        Category category2 = new Category(1002,"Current",10);
        Category category3 = new Category(1003,"Salary",12);

        ArrayList<Category>categoryList  = new ArrayList<>();
        categoryList.add(category1);
        categoryList.add(category2);
        categoryList.add(category3);

        return categoryList;
    }

    public Number getTypeId() {
        return typeId;
    }

    public void setTypeId(Number typeId) {
        this.typeId = typeId;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

    public Number getInterest() {
        return interest;
    }

    public void setInterest(Number interest) {
        this.interest = interest;
    }
}
