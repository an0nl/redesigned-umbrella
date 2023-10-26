# redesigned-umbrella

<!DOCTYPE html>
<html>
<head>
    <title>Personal Details</title>
</head>
<body>
    <h1>Personal Details</h1>
    <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>

        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob"><br><br>

        <label for="gender">Gender:</label>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label><br><br>

        <label for="country">Country:</label>
        <select id="country" name="country">
            <option value="usa">USA</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia
              
            </option>
            <option value="other">Other</option>
        </select><br><br>

        <input type="submit" value="Submit">
    </form>
</body>
</html>
