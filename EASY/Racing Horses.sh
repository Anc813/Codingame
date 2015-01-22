# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

read N
ARRAY=()

for (( i=0; i<N; i++ )); do
    read PI
    ARRAY+=($PI)
done

IFS=$'\n' sorted=($(sort -n <<<"${ARRAY[*]}"))

min=$(( ${sorted[1]} - ${sorted[0]} ))
prev=${sorted[0]}
for i in "${sorted[@]:1}"
do
    dif=$(( $i - $prev ))
    prev=$i
    echo $dif>&2
    if (( $dif < $min)); then 
        min=$dif;
    fi
   #echo $i
   # do whatever on $i
done

# Write an action using echo
# To debug: echo "Debug messages..." >&2

echo "$min"
