interface DatabaseInterface {
    // Create new data
    create(data: any): Promise<any>;

    // Get data

    connection(): Promise<any>;

}

export { DatabaseInterface }