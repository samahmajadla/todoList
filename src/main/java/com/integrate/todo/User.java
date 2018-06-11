package com.integrate.todo;

import java.util.Objects;

public class User {

    private Integer userId;
    private String firstName;
    private String lastName;
    private String userName;
    private String eMail;
    private String passwordHash;
    private String signupDate;
    private int preference;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(userId, user.userId) &&
                Objects.equals(firstName, user.firstName) &&
                Objects.equals(lastName, user.lastName) &&
                Objects.equals(userName, user.userName) &&
                Objects.equals(eMail, user.eMail) &&
                Objects.equals(passwordHash, user.passwordHash) &&
                Objects.equals(signupDate, user.signupDate) &&
                Objects.equals(preference, user.preference);
    }

    @Override
    public int hashCode() {

        return Objects.hash(userId, firstName, lastName, userName, eMail, passwordHash, signupDate, preference);
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
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

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String geteMail() {
        return eMail;
    }

    public void seteMail(String eMail) {
        this.eMail = eMail;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public String getSignupDate() {
        return signupDate;
    }

    public void setSignupDate(String signupDate) {
        this.signupDate = signupDate;
    }

    public int getPreference() {
        return preference;
    }

    public void setPreference( int preference) {
        this.preference = preference;
    }

    public User setUser(String firstName, String lastName, String userName, String eMail, String passwordHash, String signupDate, int preference) {
        User user = new User();
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setUserName(userName);
        user.seteMail(eMail);
        user.setPasswordHash(passwordHash);
        user.setSignupDate(signupDate);
        user.setPreference(preference);
        return user;
    }
}
