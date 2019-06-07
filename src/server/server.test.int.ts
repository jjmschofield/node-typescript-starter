import axios from 'axios';

describe('src/lib/index.ts', () => {
  const expectedHttpPort = '3000';
  const expectedHttpsPort = '3001';

  beforeEach(() => {
    process.env.HTTP_PORT = expectedHttpPort;
    process.env.HTTP_PORTS = expectedHttpPort;
  });

  afterEach(() => {
    delete process.env.HTTP_PORT;
    delete process.env.HTTPS_PORT;
  });

  it('should be listening on the http port', async () => {
    // Arrange
    const expectedStatusCode = 200;

    // Act
    const result = await axios.get(`http://localhost:${expectedHttpPort}`);

    // Assert
    expect(result.status).toEqual(expectedStatusCode);
  });
});
