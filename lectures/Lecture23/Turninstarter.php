<!DOCTYPE html>
<html>
	<!--
	Turnin page example
	This page demonstrates a turnin form.
	The user can type in their personal info and turn in a fake homework assignment.
	-->
	<head>
		<title>Turnin Page</title>
	</head>
	
	<body>
<?php

// define variables and set to empty values 
$studentname = $id = $assignment = $email = $cheat = " ";
$studentnameErr = $idErr = $assignmentErr = $emailErr = $cheatErr = " ";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	//your code goes here. 

	// check name

	// check id
	//check assignnment

	// check if a file has been uploaded and if the file name is hw1, hw2,
	// check cheating
	// note you need to use $_FILES["fileToUpload"]["tmp_name"]
	// to access your file. 


	}
?>
<h1>CSC 435 Turnin</h1>
		<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post" enctype="multipart/form-data">

			<fieldset>
				<legend>Personal Information</legend>
				<div>
					Name: <input type="text" name="studentname" />
					<span class="error">* <?php echo $studentnameErr;?></span>
				</div>
				<div>
					Student id: <input type="text" name="id" maxlength="7" />
					<span class="error">* <?php echo $idErr;?></span>
				</div>

				<div>
					Student email: <input type="text" name="email"/>
					<span class="error">* <?php echo $emailErr;?></span>
				</div>
			</fieldset>
			
			<fieldset>
				<legend>Assignment Information</legend>
				<div>
					Assignment:
					<label><input type="radio" name="assignment" value="1" /> 1</label>
					<label><input type="radio" name="assignment" value="2" /> 2</label>
					<label><input type="radio" name="assignment" value="3" /> 3</label>
					<span class="error">* <?php echo $assignmentErr;?></span>
				</div>


				<div>
					Code:
					<input type="file" name="code" />
				</div>
			</fieldset>
			
			<div>
				<input type="checkbox" name="cheat" /> I promise I didn't cheat!
			</div>
			<input type="submit" />
		</form>

<?php
echo "<h2>Your Input:</h2>";
echo $studentname;
echo "<br>";
echo $id;
echo "<br>";
echo $email;
echo "<br>";
echo $assignment;
echo "<br>";
?>
</body>
</html>