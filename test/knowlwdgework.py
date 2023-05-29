def CreateUsersFromList(emails):
    emails_map = {}
    new_email_list = []
    for email in emails:
        emails_map[email] = True 
    for email in emails_map:
        new_email_list.append(email) 
    
    users = ListUsersByEmail(new_email_list)

    users_map = {}

    for user in users:
        users_map[user.Email] = user

    updatas = []
    create = []

    for email in new_email_list:
        user = users_map[email]

        if user == None:
            user = {}
            user.Email = email
            user.Id = FreshUserID()
            create.append(user)
        else:
            if user.Deactivated == True:
                user.Deactivated = False
                updatas.append(user)
    
    UpdateUsers(updatas)
    CreateUsers(create)
    
            

        

