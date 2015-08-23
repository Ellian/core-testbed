cd ../libs/cu-events
call gulp

cd ../cu-stores
call gulp

cd ../cu-components
call gulp

cd ../../core-testbed
call gulp
copy src\fake*.js dist\js