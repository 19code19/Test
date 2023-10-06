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
