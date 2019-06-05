// import { createConsoleMock } from '../mocks/console.mock';
//
// import underTest from './index';
//
// describe('src/lib/index.ts', () => {
//   let consoleMocks : any;
//
//   beforeEach(() => {
//     consoleMocks = createConsoleMock();
//   });
//
//   afterEach(() => {
//     jest.resetAllMocks();
//   });
//
//   it('should log a given error message with a prefix', () => {
//     // Arrange
//     const fakeMessage = 'some message';
//     const expectedMessage = `Error: ${fakeMessage}`;
//
//     // Act
//     underTest.error(fakeMessage, {});
//
//     // Assert
//     expect(consoleMocks.errorSpy).toHaveBeenCalledWith(expectedMessage);
//   });
//
//   it('should log a given warning message with a prefix', () => {
//     // Arrange
//     const fakeMessage = 'some message';
//     const expectedMessage = `Warn: ${fakeMessage}`;
//
//     // Act
//     underTest.error(fakeMessage, {});
//
//     // Assert
//     expect(consoleMocks.warnSpy).toHaveBeenCalledWith(expectedMessage);
//   });
//
//   it('should log a given info message with a prefix', () => {
//     // Arrange
//     const fakeMessage = 'some message';
//     const expectedMessage = `Info: ${fakeMessage}`;
//
//     // Act
//     underTest.error(fakeMessage, {});
//
//     // Assert
//     expect(consoleMocks.logSpy).toHaveBeenCalledWith(expectedMessage);
//   });
//
//   it('should log a given verbose message with a prefix', () => {
//     // Arrange
//     const fakeMessage = 'some message';
//     const expectedMessage = `Verbose: ${fakeMessage}`;
//
//     // Act
//     underTest.error(fakeMessage, {});
//
//     // Assert
//     expect(consoleMocks.logSpy).toHaveBeenCalledWith(expectedMessage);
//   });
//
//   it('should log a given debug message with a prefix', () => {
//     // Arrange
//     const fakeMessage = 'some message';
//     const expectedMessage = `Debug: ${fakeMessage}`;
//
//     // Act
//     underTest.error(fakeMessage, {});
//
//     // Assert
//     expect(consoleMocks.debugSpy).toHaveBeenCalledWith(expectedMessage);
//   });
//
//   it('should log a given silly message with a prefix', () => {
//     // Arrange
//     const fakeMessage = 'some message';
//     const expectedMessage = `Silly: ${fakeMessage}`;
//
//     // Act
//     underTest.error(fakeMessage, {});
//
//     // Assert
//     expect(consoleMocks.debugSpy).toHaveBeenCalledWith(expectedMessage);
//   });
// });
