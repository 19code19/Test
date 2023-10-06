USE master; -- Make sure you are in the master database
GO

IF EXISTS (
    SELECT 1
    FROM sys.server_principals
    WHERE name = 'your_login_name'
)
BEGIN
    PRINT 'Login exists.';
END
ELSE
BEGIN
    PRINT 'Login does not exist.';
END




USE YourDatabaseName; -- Replace 'YourDatabaseName' with the name of your database
GO

IF EXISTS (
    SELECT 1
    FROM sys.database_principals
    WHERE name = 'your_user_name'
          AND type_desc = 'SQL_USER'
)
BEGIN
    PRINT 'User exists.';
END
ELSE
BEGIN
    PRINT 'User does not exist.';
END



USE YourDatabaseName; -- Replace 'YourDatabaseName' with the name of your database
GO

DECLARE @UserName NVARCHAR(100) = 'your_user_name'; -- Replace with the user you want to check
DECLARE @RoleName NVARCHAR(100) = 'your_role_name'; -- Replace with the role you want to check

IF EXISTS (
    SELECT 1
    FROM sys.database_role_members AS rm
    INNER JOIN sys.database_principals AS u ON rm.member_principal_id = u.principal_id
    INNER JOIN sys.database_principals AS r ON rm.role_principal_id = r.principal_id
    WHERE u.name = @UserName
          AND r.name = @RoleName
)
BEGIN
    PRINT 'User is a member of the role.';
END
ELSE
BEGIN
    PRINT 'User is not a member of the role.';
END
