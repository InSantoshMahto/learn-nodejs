import { exec, execFile, spawn } from 'child_process'
import { join } from 'path/posix'
import { promisify } from 'util'

/**
 * ***************** spawn *****************
 * it's return ChildProcess Interface
 */

// read the list of user
const ls = spawn('ls', ['-lh', '/home'])

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`)
})

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`)
})

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`)
})

/**
 * ***************** exec *****************
 * take callback
 * we can make it promise
 */

// exec with callback
exec('pwd', { cwd: join(process.cwd(), '..') }, (error, stdout, stderr) => {
  if (error) throw error
  if (stdout) console.log(`stdout: ${stdout}`)
  if (stderr) console.error(`stderr: ${stderr}`)
});

// exec with promise [using IIFE]
(async () => {
  try {
    const { stderr, stdout } = await promisify(exec)('pwd', { cwd: join(process.cwd(), '..') })
    if (stdout) console.log(`stdout: ${stdout}`)
    if (stderr) console.warn(`stderr: ${stderr}`)
  } catch (error) {
    console.error(`error: ${error.message}`)
  }
})()

/**
 * ***************** exec *****************
 * same as exec But it will take executable file and list of arguments
 * we can make it promise
 */
execFile('node', ['--version'], (error, stdout, stderr) => {
  if (error) {
    throw error
  }
  console.log('Nodejs version:-', stdout)
})
