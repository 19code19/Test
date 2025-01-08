var lstClientsId = clientsIds
    .Distinct()
    .Where(x => !string.IsNullOrWhiteSpace(x) && Regex.IsMatch(x, @"^[a-zA-Z0-9\s]+$"))
    .Chunk(batchSize);
