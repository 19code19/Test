var lstClientsId = clientsIds
    .Distinct()
    .Where(x => 
        // Filter out null, empty, or whitespace strings and 
        // ensure the string contains only alphanumeric characters and spaces using Regex
        !string.IsNullOrWhiteSpace(x) && Regex.IsMatch(x, @"^[a-zA-Z0-9\s]+$")
    )
    .Chunk(batchSize);
