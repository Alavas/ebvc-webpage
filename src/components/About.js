import React from 'react'
import EBVC from '../images/EBVC.gif'
import ProgramMem from '../images/programmem.png'
import SampleProgram from '../images/sampleprogram.png'

const About = () => {
	return (
		<div
			id="content"
			className="about"
			style={{ minHeight: 'calc(100vh - 100px - 2.5rem)' }}
		>
			<h1>What's this thing all about??</h1>
			<div className="about-gif">
				<img src={EBVC} alt="Computer LEDs GIF" />
			</div>
			<p>
				I few months back I stumbled upon some videos on YouTube by{' '}
				<a href="https://www.youtube.com/c/BenEater">Ben Eater</a>. Ben has
				an incredible video series on building an 8-bit computer with simple
				logic gates all on a huge(!) breadboard. After watching this I got
				inspired to dust off my old Verilog knowledge and try to "build" my
				own 8-bit computer. It's not the first and certainly not the best
				computer but it is a fun project. You can find the GitHub repo for
				the project <a href="https://github.com/Alavas/EBVC">here</a>. I'm
				current developing this all on the Lattice LCMX02-1200HC on the{' '}
				<a href="https://tinyfpga.com/">TinyFPGA</a> AX2 board. These are
				really cool little FPGA boards that get you up and running very
				quickly, their programmer is super simple.
			</p>
			<p>
				The computer is a Von Neumann architecture machine with 256 bytes of
				memory/code space. Instructions are currently 8 bits wide and are
				either 1 or 2 bytes long. Addressing is absolute, with the small
				memory space that's currently in use adding offsets doesn't seem too
				important at the moment. Registers are 8 bits wids as well, there
				are the general purpose X, Y, and Z registers as well as the ALU
				register for performing math functions. There are currently 2
				useable flags, the zero flag and the carry flag. These can be used
				in conjunction with comparisons and logical jumps to do some
				interesting stuff. The program for the computer to run is currently
				compiled into the JED file, it is expected to be a hex file with the
				name <b>program.mem</b>. Each line is a new address in memory.
			</p>
			<div className="about-img">
				<img src={ProgramMem} alt="Verilog showing expected file name." />
			</div>
			<p>
				In the future I'll be writing some additional code to retrieve the
				memory from an external erasable memory. In the meantime here's a
				sweet example program. It will count up by 1 until the ALU is equal
				to 0x55, once it matches that value it will reset to 0 and count up
				again.{' '}
			</p>
			<div className="about-img">
				<img src={SampleProgram} alt="Example program." />
			</div>
			<p>
				There are of course plenty of better ways to do this but I made the
				example purposefully extra convoluted to make it look more
				interesting and to be a better test{' '}
				<span role="img" aria-label="smile">
					&#128516;
				</span>
				.
			</p>
			<p>TODO List:</p>
			<ul>
				<li>Proper division logic.</li>
				<li>Add more Bitwise logic operations.</li>
				<li>Fix the "stack" that I poorly coded.</li>
				<li>Read program from external memory?</li>
				<li>Use fewer slices...</li>
				<li>
					Inputs!{' '}
					<span role="img" aria-label="lightning bolt">
						&#9889;
					</span>
				</li>
				<li>
					Interrupts{' '}
					<span role="img" aria-label="prayer hands">
						&#128591;
					</span>
				</li>
				<li>
					Finish the compiler...it's no fun hand compiling{' '}
					<span role="img" aria-label="prayer hands">
						&#128556;
					</span>
				</li>
			</ul>
		</div>
	)
}

export default About
